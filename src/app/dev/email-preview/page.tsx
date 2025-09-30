import InviteEmail from "@/emails/InviteEmail";
import { render } from "@react-email/render";
import Link from "next/link";

export default async function EmailPreviewPage() {
  const sampleData = {
    invite_code: "ABC123XYZ",
    inviter_name: "Sarah Johnson",
    user_email: "newuser@example.com",
  };

  const emailHtml = await render(<InviteEmail {...sampleData} />, {
    pretty: true,
  });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "20px" }}>Email Preview (Dev Only)</h1>

        <div style={{
          background: "#f5f5f5",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}>
          <h2 style={{ marginTop: 0 }}>Quick Links:</h2>
          <ul>
            <li>
              <Link href="/invite/ABC123XYZ" style={{ color: "#0066cc" }}>
                View Fallback Page (/invite/ABC123XYZ)
              </Link>
            </li>
            <li>
              <Link href="https://links.getgroceryguru.com/invite/ABC123XYZ" style={{ color: "#0066cc" }}>
                Test Production Invite Link
              </Link>
            </li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            <strong>Sample Data:</strong> invite_code: {sampleData.invite_code},
            inviter_name: {sampleData.inviter_name}
          </p>
        </div>

        <div style={{ border: "2px solid #ddd", borderRadius: "8px", padding: "20px" }}>
          <h2>Rendered Email:</h2>
          <div dangerouslySetInnerHTML={{ __html: emailHtml }} />
        </div>
      </div>
    </div>
  );
}
