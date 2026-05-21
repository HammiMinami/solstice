"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { isValidEmail, isTextValid } from "../../lib/validation";
import styles from "./ContactLeadForm.module.scss";

type FormValues = {
    fullName: string;
    email: string;
    inquiryType: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function ContactLeadForm() {
    const [values, setValues] = useState<FormValues>({
        fullName: "",
        email: "",
        inquiryType: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<string>("");

    function validate(formValues: FormValues) {
        const nextErrors: FormErrors = {};

        if (!formValues.fullName.trim()) {
            nextErrors.fullName = "Full name is required.";
        } else if (!isTextValid(formValues.fullName)) {
            nextErrors.fullName = "Must be at least 6 characters long.";
        }

        if (!formValues.email.trim()) {
            nextErrors.email = "Email address is required.";
        } else if (!isValidEmail(formValues.email)) {
            nextErrors.email = "Enter a valid email address.";
        }

        if (!formValues.inquiryType) {
            nextErrors.inquiryType = "Please select an inquiry type.";
        }

        if (!formValues.message.trim() || !isTextValid(formValues.message)) {
            nextErrors.message = "Message is required and must be at least 6 characters long.";
        }

        return nextErrors;
    }

    function handleChange(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        const { name, value } = event.target;

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name as keyof FormValues]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }

        if (status) {
            setStatus("");
        }
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const nextErrors = validate(values);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            setStatus("error");
            return;
        }

        setStatus("loading");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        const data = await res.json();

        setStatus(data.success ? "success" : "error");
    }

    return (
        <div className={styles.formSection}>
            <div className={`container ${styles.formGroup}`}>
                <h2 className="mb-4">Contact Us</h2>

                {status === "success" ? (
                    <div className={styles.successPanel}>
                        <p className={styles.successMessage}>
                            Thank you! Your inquiry has been submitted successfully.<br /><br />

                            Rest assure, our team will check on your inquiry <br />
                            and reach out to you as soon as possible.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="row g-3" noValidate>
                        <div className="col-md-6">
                            <input
                                name="fullName"
                                value={values.fullName}
                                onChange={handleChange}
                                className={`form-control ${errors.fullName ? styles.isInvalid : ""}`}
                                placeholder="Full Name"
                                aria-invalid={!!errors.fullName}
                            />
                            {errors.fullName && <div className={styles.invalidFeedback}>{errors.fullName}</div>}
                        </div>

                        <div className="col-md-6">
                            <input
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                className={`form-control ${errors.email ? styles.isInvalid : ""}`}
                                placeholder="Email Address"
                                aria-invalid={!!errors.email}
                            />
                            {errors.email && <div className={styles.invalidFeedback}>{errors.email}</div>}
                        </div>

                        <div className="col-md-12">
                            <select
                                name="inquiryType"
                                value={values.inquiryType}
                                onChange={handleChange}
                                className={`form-select ${errors.inquiryType ? styles.isInvalid : ""}`}
                                aria-invalid={!!errors.inquiryType}
                            >
                                <option value="">Select Inquiry Type</option>
                                <option value="general">General</option>
                                <option value="support">Support</option>
                                <option value="business">Business</option>
                            </select>
                            {errors.inquiryType && <div className={styles.invalidFeedback}>{errors.inquiryType}</div>}
                        </div>

                        <div className="col-md-12">
                            <textarea
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                className={`form-control ${errors.message ? styles.isInvalid : ""}`}
                                placeholder="Message"
                                rows={4}
                                aria-invalid={!!errors.message}
                            />
                            {errors.message && <div className={styles.invalidFeedback}>{errors.message}</div>}
                        </div>

                        <div className="col-md-12 d-flex">
                            <button type="submit" className={` ${styles.submitBtn}`}>
                                {status === "loading" ? "SUBMITTING..." : "SUBMIT"}
                            </button>
                        </div>

                        {status === "error" && Object.keys(errors).length === 0 && (
                            <p className={styles.errorMessage}>Submission failed. Please try again.</p>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
}
