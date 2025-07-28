'use client'

import { useState } from "react"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"

export default function EarlyAccessPage() {
  const [form, setForm] = useState({ name: "", email: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed")
      }

      setSubmitted(true)
    } catch (err: any) {
      console.error("Form submission error:", err)
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-light-bg min-h-screen text-primary">
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8 leading-tight">Built to Help You Shop Smarter</h1>
  
        <p className="text-lg mb-4">
          We built GroceryGuru because most grocery list apps didn't help us shop smarter. They were{" "}
          <strong>cluttered with features we didn't need</strong> — and none of them{" "}
          <strong>learned from what we actually bought</strong>.
        </p>
  
        <p className="text-lg mb-4">
          We wanted a list that could build on our habits, offer timely suggestions, and support how we shop week to week.
        </p>
  
        <h2 className="text-2xl font-semibold my-8">
          A grocery list that actually helps you remember — not just record.
        </h2>
  
        <p className="text-lg mb-4">
          That's exactly what GroceryGuru is designed to do. It adapts to your household's routines — what you buy and
          when. It keeps your lists current, helps you plan less, and works across stores and shared users without
          feeling heavy or overbuilt.
        </p>
  
        <p className="text-lg mb-8">
          We're inviting a small group of iOS users to test GroceryGuru through TestFlight and share early feedback. If
          you're open to trying it and telling us how it fits your life, leave your name and email below.{" "}
          <strong>We'll reach out as spots become available.</strong>
        </p>
  
        {submitted ? (
          <div className="bg-primary-accent text-primary p-6 rounded-xl">
            <p className="text-lg"><strong>Thanks!</strong> We've received your request. We will be in touch as spots become available.</p>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-6">Join the Early Access</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 bg-neutral-100 px-4 py-3 text-base text-primary placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 bg-neutral-100 px-4 py-3 text-base text-primary placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                  />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="bg-primary-accent hover:bg-tertiary-accent text-primary px-6 py-3 text-lg w-full"
              >
                {loading ? "Submitting..." : "Request Access"}
              </Button>
              {error && <p className="text-error mt-2">{error}</p>}
            </form>
          </div>
        )}
  
        <p className="text-sm text-primary opacity-60 mt-10">
          <strong>*iOS only.</strong> Limited availability. Testers may be contacted for brief feedback during the trial.
        </p>
      </main>
      <Footer />
    </div>
  )
}