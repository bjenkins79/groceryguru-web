// src/emails/InviteEmail.tsx

import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Text,
    Img,
    Link,
  } from "@react-email/components";
  import * as React from "react";
  import { isTestFlightPhase } from "@/lib/constants";

  type Props = {
    invite_code: string;
    inviter_name: string;
    user_email: string;
  };
  
  const InviteEmail = ({ invite_code, inviter_name, user_email }: Props) => {
    const inviteUrl = `https://links.getgroceryguru.com/invite/${invite_code}`;
  
    return (
      <Html>
        <Head />
        <Preview>{inviter_name} invited you to GroceryGuru</Preview>
        <Body
          style={{
            backgroundColor: "#EAEAE5", // var(--color-light-background)
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
            margin: "0",
            padding: "40px 20px",
            color: "#293D2E", // var(--color-primary)
          }}
        >
          <Container
            style={{
              backgroundColor: "#FFFFFF", // var(--color-secondary)
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(47, 79, 63, 0.1)",
              margin: "0 auto",
              maxWidth: "600px",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <Section
              style={{
                backgroundColor: "#FFBE72", // var(--color-primary-accent)
                padding: "32px 40px",
                textAlign: "center",
              }}
            >
              <Img
                src="https://gg-email-renderer.vercel.app/googleIcon_GroceryGuru_320x132.png"
                alt="GroceryGuru"
                width="160"
                height="66"
                style={{ display: "block", margin: "0 auto" }}
              />
            </Section>
  
            {/* Content */}
            <Section style={{ padding: "40px" }}>
  <Text
    style={{
      fontSize: "24px",
      fontWeight: "600",
      color: "#2A3D2E",
      marginBottom: "16px",
      textAlign: "center",
    }}
  >
    You've been invited to GroceryGuru
  </Text>

  {isTestFlightPhase ? (
    <>
      <Text
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          color: "#2A3D2E",
          margin: "16px 0",
          textAlign: "left",
        }}
      >
        <strong>{inviter_name}</strong> is helping us test GroceryGuru and wanted to share it with you.
      </Text>

      <Text
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          color: "#2A3D2E",
          margin: "16px 0",
          textAlign: "left",
        }}
      >
        GroceryGuru is currently in private beta through Apple’s TestFlight. To get started:
        <br />
        <br />
        1.{" "}
        <Link
          href="https://apps.apple.com/us/app/testflight/id899247664?mt=8"
          style={{ color: "#293D2E", textDecoration: "underline" }}
        >
          Install TestFlight
        </Link>{" "}
        (if you haven’t already)
        <br />
        2.{" "}
        <Link
          href="itms-beta://testflight.apple.com/join/Km1zWkmS"
          style={{ color: "#293D2E", textDecoration: "underline" }}
        >
          Download GroceryGuru
        </Link>
        <br />
        3. Return to this email and tap the invite link below
      </Text>
    </>
  ) : (
    <>
      <Text
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          color: "#2A3D2E",
          margin: "16px 0",
          textAlign: "left",
        }}
      >
        <strong>{inviter_name}</strong> invited you to join their GroceryGuru account.
      </Text>

      <Text
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          color: "#2A3D2E",
          margin: "16px 0",
          textAlign: "left",
        }}
      >
        Tap the button below to get started. If the app is not installed, you’ll be directed to the App Store first.
      </Text>
    </>
  )}

{/* Invite Button */}
<Section style={{ textAlign: "center", marginTop: "24px", marginBottom: "16px" }}>
    <Link
      href={inviteUrl}
      style={{
        backgroundColor: "#293D2E",
        borderRadius: "8px",
        color: "#FFFFFF",
        display: "inline-block",
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "20px",
        padding: "16px 32px",
        textDecoration: "none",
        textAlign: "center",
      }}
    >
      Accept Invite
    </Link>
  </Section>

{/* Fallback Code Block */}
<Section style={{ textAlign: "center", margin: "0" }}>
  <Text
    style={{
      fontSize: "14px",
      lineHeight: "22px",
      color: "#2A3D2E",
      marginBottom: "8px",
    }}
  >
    Or open the app and enter this code:
  </Text>

  <Text
    style={{
      fontSize: "24px",
      fontWeight: "bold",
      letterSpacing: "4px",
      background: "#FFFFFF",
      border: "2px solid #FFBE72",
      padding: "12px 20px",
      display: "inline-block",
      borderRadius: "8px",
    }}
  >
    {invite_code}
  </Text>
</Section>

</Section>

  
            {/* Footer */}
            <Section
              style={{
                backgroundColor: "#F8F9FA",
                padding: "24px 40px",
                textAlign: "center",
                borderTop: "1px solid rgba(255, 190, 114, 0.2)", // translucent accent
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  color: "#6D6D6D", // var(--color-completed)
                  margin: "0",
                }}
              >
                © 2025 GroceryGuru. Smart lists made simple.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default InviteEmail;
  