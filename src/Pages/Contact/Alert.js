
import React from 'react'

export default function Alert({ name }) {
    return (
        <div className="alert alert-success text-center">
            Hello {name}, your message send successfully ! (Note.. this form is only for testing, using my social network).
        </div>
    )
}
