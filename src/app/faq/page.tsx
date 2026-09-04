const APP_STORE =
  "https://apps.apple.com/us/app/groceryguru-grocery-assistant/id6744698978";

export const metadata = {
  title: "FAQ – GroceryGuru",
  description: "How GroceryGuru learns, what it does with what you tell it, and where it works.",
};

type Group = { label: string; items: { q: string; a: string[] }[] };

const GROUPS: Group[] = [
  {
    label: "HOW IT LEARNS",
    items: [
      {
        q: "How do smart recommendations work?",
        a: [
          "GroceryGuru notices when you buy something and how often. Once it has seen an item two or three times it works out your usual interval and starts recommending it around the time you need it again. The more you shop, the more accurate it gets.",
        ],
      },
      {
        q: "How does the app learn what I buy?",
        a: [
          "Every time you check an item off, it records the date, the quantity and the store. From that, we create a per-item factor analysis to make informed recommendations on purchases.",
        ],
      },
      {
        q: "Do I need to set anything up first?",
        a: [
          "No. Use it as a normal grocery list and it learns in the background. There is no setup, no inventory to keep, and nothing to configure.",
        ],
      },
      {
        q: "Why am I seeing items I did not add?",
        a: [
          "Those are recommendations, based on what you have bought before and when. You only see one when it is reasonably sure you are due. Add it in one tap, or leave it.",
        ],
      },
      {
        q: "What is Ask GroceryGuru?",
        a: [
          'A chat function that allows you to ask questions rather than searching or finding things on your own. Questions like "What do I need?" or "What do I need at Costco next month?" or "Do I need milk?" will be based on your shopping patterns.',
        ],
      },
    ],
  },
  {
    label: "USING IT",
    items: [
      {
        q: "How do stores work?",
        a: [
          "You can assign a store to each item. We remember that going forward. Assign bananas to Whole Foods and they are a Whole Foods item everywhere. The Stores tab shows what you need at each place.",
        ],
      },
      {
        q: "Can an item be on more than one list?",
        a: ["Yes, with a different quantity and note on each one. The store stays the same wherever it appears."],
      },
      {
        q: "Can an item be at more than one store?",
        a: [
          "No. Each item has one store, and it keeps that store on every list.",
          "Brands are the exception. If you buy the same item but with multiple brands, we track each branded item as separate. So they can each be associated with their own store. So, a branded cheddar can be a Costco item while the plain one is a Trader Joe's item.",
        ],
      },
      {
        q: "What happens when I check something off?",
        a: [
          "It is marked as bought and recorded with the date, quantity and store. That record is what everything else is built on.",
        ],
      },
      {
        q: "What is the trash icon for?",
        a: [
          "That is Cleanup. It clears the items you have checked off, so tap it when you are done shopping and the list is ready for the next trip. It only becomes available once you have something checked off, and it asks before it clears anything.",
        ],
      },
      {
        q: "How does search work?",
        a: [
          "Our one-stop search looks across all your data to recommend items that are best fit for what you want. Results are grouped so you can see what is already on this list, what is at this store, what is on your other lists, what you are due for, and everything else that matches.",
        ],
      },
      {
        q: "Can my family or friends use the same lists?",
        a: [
          "Yes, on Premium. You can invite up to three other people from account settings, and everyone shares the same lists and sees the same recommendations, synced.",
        ],
      },
      {
        q: "How do I manage my subscription?",
        a: ["Through your Apple account. Open Settings on your device, tap your name, then Subscriptions."],
      },
    ],
  },
  {
    label: "WHERE IT WORKS",
    items: [
      { q: "Is there an Android or web version?", a: ["Not yet. GroceryGuru is an iPhone app today."] },
      {
        q: "Which countries is it built for?",
        a: [
          "The United States, Canada, the United Kingdom, Ireland, Australia and New Zealand. Each one gets its own stores, its own categories and its own names for things, so a shopper in London sees Tesco and courgettes, not Kroger and zucchini.",
        ],
      },
      {
        q: "Can I change my country later?",
        a: ["Yes, in account settings. Your stores, categories and item names change with it."],
      },
    ],
  },
  {
    label: "YOUR INFORMATION",
    items: [
      {
        q: "What do you collect?",
        a: [
          "Your account details, your lists and items, and your purchase history. It is used to run the app and to make your recommendations. It is not sold, and it is not shared with advertisers.",
        ],
      },
      {
        q: "Do you know where I am?",
        a: ["No. Store assignments are yours to make by hand. The app never asks for your location."],
      },
      {
        q: "How do I delete my account?",
        a: [
          "From Account Settings in the app. It is permanent, and it removes everything. If you are the account admin, it also removes the people you invited.",
        ],
      },
    ],
  },
];

const cardShadow =
  "0 1px 2px rgba(0,0,0,0.05),0 10px 11px rgba(0,0,0,0.06),inset 0 0 0 1px var(--hairline)";

function GroupSection({ group }: { group: Group }) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <span
        className="font-bebas"
        style={{ fontSize: 24, letterSpacing: "1.2px", color: "var(--tealink)" }}
      >
        {group.label}
      </span>
      <div
        style={{
          background: "var(--card)",
          borderRadius: 20,
          boxShadow: cardShadow,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        {group.items.map((it) => (
          <div key={it.q} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <p style={{ margin: 0, fontSize: 18, fontWeight: 800, lineHeight: 1.25 }}>{it.q}</p>
            {it.a.map((line, idx) => (
              <p
                key={idx}
                style={{ margin: 0, fontSize: 16.5, lineHeight: 1.5, color: "rgba(var(--ink-rgb),0.85)" }}
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--canvas)",
        color: "var(--ink)",
        fontFamily: "var(--font-hanken), -apple-system, sans-serif",
        fontSize: 17,
        lineHeight: 1.5,
      }}
    >
      {/* Sage header with embedded nav (no sticky bar, per the design) */}
      <div style={{ background: "var(--brand)", color: "var(--cream)", padding: "0 0 clamp(30px,5vw,72px)" }}>
        <nav
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "clamp(16px,2vw,28px)",
            padding: "14px clamp(22px,5vw,64px)",
          }}
        >
          <a href="/" style={{ flex: 1, display: "flex" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Logo_GroceryGuru_White.svg" alt="GroceryGuru" style={{ height: 40, width: "auto", display: "block" }} />
          </a>
          <a href="/plans" style={{ fontSize: 15, fontWeight: 600, color: "var(--cream)" }}>
            Plans
          </a>
          <a
            href={APP_STORE}
            style={{
              background: "var(--forest)",
              color: "var(--cream)",
              fontWeight: 600,
              fontSize: 14,
              padding: "8px 15px",
              borderRadius: 999,
            }}
          >
            Get the app
          </a>
        </nav>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "clamp(22px,4vw,52px) clamp(22px,5vw,64px) 0",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <h1
            className="font-playfair"
            style={{
              fontWeight: 600,
              fontSize: "clamp(44px,6vw,84px)",
              lineHeight: 1.01,
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            FAQ
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(18px,1.7vw,24px)",
              maxWidth: "46ch",
              lineHeight: 1.42,
              color: "rgba(var(--cream-rgb),0.92)",
            }}
          >
            How GroceryGuru learns, what it does with what you tell it, and where it works.
          </p>
        </div>
      </div>

      {/* Q&A grid */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(30px,4vw,64px) clamp(22px,5vw,64px) clamp(20px,3vw,40px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
          gap: "clamp(22px,3vw,48px)",
          alignItems: "start",
        }}
      >
        {GROUPS.map((g) => (
          <GroupSection key={g.label} group={g} />
        ))}
      </div>

      {/* Forest close (FAQ variant, with support line) */}
      <section style={{ background: "var(--forest)", color: "var(--cream)", padding: "clamp(34px,5vw,80px) clamp(22px,5vw,64px)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,36px)" }}>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.45, color: "rgba(var(--cream-rgb),0.9)" }}>
            Still stuck?{" "}
            <a href="mailto:support@getgroceryguru.com" style={{ color: "var(--cream)", textDecoration: "underline" }}>
              Email support
            </a>{" "}
            and we will get back to you.
          </p>
          <h2
            className="font-playfair"
            style={{ fontWeight: 600, fontSize: "clamp(36px,4.6vw,64px)", lineHeight: 1.02, margin: 0 }}
          >
            Keep Shopping Smart.
          </h2>
          <a href={APP_STORE} style={{ display: "inline-flex", alignSelf: "flex-start" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Download_on_the_App_Store_Badge.png" alt="Download on the App Store" style={{ height: 50, display: "block" }} />
          </a>
          <div style={{ height: 1, background: "rgba(var(--cream-rgb),0.18)" }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px clamp(22px,3vw,40px)", alignItems: "center" }}>
            <a href="/" style={{ flex: "1 1 200px", display: "flex" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Logo_GroceryGuru_White.svg" alt="GroceryGuru" style={{ height: "clamp(42px,3.6vw,50px)", width: "auto", display: "block" }} />
            </a>
            <a href="/plans" style={{ fontSize: 15, fontWeight: 600, color: "var(--cream)" }}>
              Plans
            </a>
            <a href="/privacy" style={{ fontSize: 15, fontWeight: 600, color: "var(--cream)" }}>
              Privacy
            </a>
            <span style={{ fontSize: 14, color: "rgba(var(--cream-rgb),0.85)" }}>Shop smarter</span>
          </div>
        </div>
      </section>
    </div>
  );
}
