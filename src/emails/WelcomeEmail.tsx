// src/emails/WelcomeEmail.tsx

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

type Props = {
  first_name: string;
  user_email: string;
};

const WelcomeEmail = ({ first_name, user_email }: Props) => {
  const ctaUrl = "https://links.getgroceryguru.com";

  return (
    <Html>
      <Head />
      <Preview>Three tips from Ben</Preview>
      <Body
        style={{
          backgroundColor: "#EAEAE5",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          margin: "0",
          padding: "40px 20px",
          color: "#293D2E",
        }}
      >
        <Container
          style={{
            backgroundColor: "#FFFFFF",
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
              backgroundColor: "#FFBE72",
              padding: "32px 40px 40px 40px",
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
          <Section style={{ padding: "48px 40px 32px 40px" }}>
            {/* Opening */}
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0 0 16px 0",
                textAlign: "left",
              }}
            >
              Thanks for downloading GroceryGuru. I'm the indie developer behind it, and I'm glad to have you.
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0 0 16px 0",
                textAlign: "left",
              }}
            >
              GroceryGuru learns how you shop: the stores you visit, the brands you love, the things you buy week after week. Nobody loves onboarding emails, so this is the only one I'll send.
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0 0 24px 0",
                textAlign: "left",
              }}
            >
              Here are three tips to help you get the most out of it.
            </Text>

            {/* Tips */}
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0 0 16px 0",
                textAlign: "left",
              }}
            >
              <strong>Add what you need.</strong>
              <br />
              Tap <strong>+</strong> to add an item fast. Tap <strong>the menu</strong> to add it with a specific brand.
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0 0 16px 0",
                textAlign: "left",
              }}
            >
              <strong>Make it yours.</strong>
              <br />
              Tap <strong>the menu</strong> next to any item to assign your preferred brands, stores, and categories. GroceryGuru remembers these for next time.
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0 0 32px 0",
                textAlign: "left",
              }}
            >
              <strong>After you shop.</strong>
              <br />
              Delete completed items. This is how GroceryGuru learns what you buy and how often.
            </Text>

            {/* CTA Button */}
            <Section style={{ textAlign: "center", marginTop: "0", marginBottom: "32px" }}>
              <Link
                href={ctaUrl}
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
                Open GroceryGuru
              </Link>
            </Section>

            {/* Sign-off */}
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2A3D2E",
                margin: "0",
                textAlign: "left",
              }}
            >
              Keep shopping smart,
              <br />
              Ben
            </Text>
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: "#F8F9FA",
              padding: "24px 40px",
              textAlign: "center",
              borderTop: "1px solid rgba(255, 190, 114, 0.2)",
            }}
          >
            <Text
              style={{
                fontSize: "14px",
                color: "#6D6D6D",
                margin: "0",
              }}
            >
              © 2026 GroceryGuru. Smart lists made simple.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;
