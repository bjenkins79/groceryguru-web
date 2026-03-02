# FAQ Page Content Plan

**Purpose**: Educational FAQ that helps users understand and use GroceryGuru's features.

**Route**: `/faq`

**Focus**: Product education, not sales or competitive positioning. Keep it helpful and informative.

---

## Content Categories

### Category 1: Intelligence Features 🧠
*Explains the ML/NLP that makes GroceryGuru unique*

**Q: How do Smart Recommendations work?**
A: GroceryGuru learns your shopping patterns by tracking when you buy items and how often. The system analyzes purchase frequency, calculates confidence scores based on pattern consistency, and proactively suggests items before you run out. For example, if you buy eggs every 7 days, GroceryGuru will recommend them around day 6-7. The more you use the app, the more accurate it becomes.

**Q: What is Ask GroceryGuru?**
A: Ask GroceryGuru is a conversational interface that lets you ask natural language questions about your shopping needs. Instead of filtering or searching manually, just ask "What do I need at Costco next week?" or "Do I need milk?" and get personalized answers based on your purchase history and learned patterns.

Examples you can ask:
- "What do I need?" → Shows all stores, 7-day window
- "Urgent items" → Items needed in next 0-3 days
- "What do I need at Costco next month?" → Store + time filter
- "Do I need milk?" → Check if item is due, already on list, or not needed

**Q: Why am I seeing items I didn't manually add?**
A: Those are Smart Recommendations - items GroceryGuru predicts you'll need based on your shopping history. The system tracks purchase intervals and confidence levels. You'll only see recommendations when the system is confident you're likely to need them soon. You can add them to your list with one tap or dismiss them.

**Q: How does the app learn my shopping patterns?**
A: Every time you check off an item, GroceryGuru records the purchase date, quantity, and store. Over time, it calculates average intervals between purchases, identifies pattern consistency, and learns your typical quantities. The system needs at least 2-3 purchases of an item to start making predictions. After 3+ items have sufficient history, you'll graduate from "learning mode" to "personal mode" and start seeing smart recommendations.

**Q: Does GroceryGuru track my location or require barcode scanning?**
A: No. GroceryGuru learns passively from your check-off patterns - no scanning, no location tracking, no manual inventory management. You simply use the app like a normal grocery list, and the intelligence builds in the background. This reduces friction and respects your privacy.

---

### Category 2: Account & Features 👥
*Basic information about app features and sharing*

**Q: Can I share my account with family?**
A: Yes, account administrators can invite additional users through the app's account settings. Everyone shares the same lists, items, and data with real-time sync across all devices.

**Q: What are the "milestone previews" I'm seeing?**
A: GroceryGuru shows you interactive previews of Smart Recommendations when you reach key pattern milestones (3, 10, 15, 20 items with purchase history). You can try adding recommended items to your lists to see how the feature works.

At 15 items, you also unlock Ask GroceryGuru questions to try the conversational interface.

**Q: How do I manage my subscription?**
A: Subscriptions are managed through your Apple App Store account. Open the Settings app on your device, tap your name, then tap "Subscriptions" to view and manage your GroceryGuru subscription.

---

### Category 3: How It Works 🛒
*Core product education on functionality*

**Q: How does store-aware shopping work?**
A: Each item is assigned to exactly one store at the account level, and this assignment is consistent across all lists. For example, if you assign "Bananas" to Whole Foods, it will always be a Whole Foods item regardless of which list contains it. The Stores tab shows all items grouped by their assigned store, making it easy to see what you need from each location. Smart Recommendations also factor in store preferences when suggesting items.

**Q: Can an item be in multiple lists at the same time?**
A: Yes! Items can exist in multiple lists simultaneously with different quantities and notes per list. For example, "Bananas" can be in "Costco Run" (quantity: 10), "Weekly Grocery" (quantity: 3), and "Meal Prep" (quantity: 5) all at once. However, the store assignment remains consistent across all lists.

**Q: What happens when I check off an item?**
A: Checking off an item marks it as "Completed" and records the purchase in your history (date, quantity, store). This data feeds into the machine learning system that powers Smart Recommendations. Over time, these check-offs create the pattern data that allows GroceryGuru to predict when you'll need items again.

**Q: How do I use the search feature?**
A: Search works across all your data - items, lists, stores, and categories. It uses fuzzy matching (typo-tolerant) and full-text search. Premium users also see "Recommended" items in search results based on ML patterns. Search results are grouped by context: "In This List", "At This Store", "In Other Lists", "Recommended" (Premium only), and the base catalog.

**Q: What are categories and how are they assigned?**
A: Categories (like Dairy, Produce, Meat, etc.) help organize items logically. Base items from the master catalog come pre-assigned to categories. For custom items you create, you select the category manually. Categories make it easier to browse and organize your shopping.

---

### Category 4: Privacy & Data 🔒
*User concerns about data and privacy*

**Q: What data does GroceryGuru collect?**
A: GroceryGuru collects your account information (name, email), your shopping list data (items, stores, purchase history), and usage patterns to power Smart Recommendations. This data is stored securely and used only to provide app features. We do not sell or share your data with advertisers or third-party marketing partners.

**Q: Does GroceryGuru track my location?**
A: No. GroceryGuru does not track your physical location. Store assignments are manual - you choose which store each item belongs to. The app learns from your check-off patterns, not location data.

**Q: How do I delete my account and data?**
A: You can delete your account from the Account Settings screen in the app. This action is permanent and removes all associated data from our system. If you're an admin, deleting your account also removes all guest user data associated with your account.

**Q: Do I need to train the app or set up preferences?**
A: No. Just use GroceryGuru like a normal grocery list and it learns in the background from your natural behavior. After 2-3 purchases of an item, the system starts detecting patterns. No setup wizards, no manual configuration required.

---

## Notes

- **Content tone**: Consumer-friendly, helpful, educational (not sales-focused)
- **Answer length**: 2-4 sentences per answer, clear and concise
- **Design**: Will be addressed in separate design exercise
- **App Store URL**: https://apps.apple.com/us/app/groceryguru-grocery-assistant/id6744698978

## File References (groceryguru-web)

### Existing Pages
- `/src/app/page.tsx` - Homepage with feature sections (reference for structure)
- `/src/app/privacy/page.tsx` - Privacy policy page (similar text-heavy layout)
- `/src/app/support/page.tsx` - Support page (where FAQ link will be added)
- `/src/app/layout.tsx` - Root layout with fonts and metadata

### Components (Design Patterns)
- `/src/components/Header.tsx` - Site header (update with FAQ link if needed)
- `/src/components/Footer.tsx` - Footer navigation (add FAQ link here)
- `/src/components/HeroSection.tsx` - Hero section pattern with grid layout
- `/src/components/SmartRecommendations.tsx` - Feature section example (numbered circles, asymmetric grid)
- `/src/components/AskGroceryGuru.tsx` - Another feature section pattern
- `/src/components/SmartSearch.tsx` - Feature section pattern
- `/src/components/StoreAwareShopping.tsx` - Feature section pattern

### Styling
- `/src/app/globals.css` - CSS variables for colors, typography scale, dark mode
  - Primary colors: `--color-primary` (#293d2e), `--color-secondary-accent` (#6ba3a2), `--color-primary-accent` (#ffbe72)
  - Typography: Bold headings, letter-spacing -0.025em
  - Transitions: 200ms cubic-bezier timing

### Configuration
- `package.json` - Next.js 16, Tailwind CSS, TypeScript
- `vercel.json` - Deployment config
- `tailwind.config.ts` - Tailwind configuration

### Public Assets
- `/public/images/` - Marketing screenshots, logo, App Store badge
- `/public/images/Download_on_the_App_Store_Badge.png` - Official Apple badge

## Content Sources

All content pulled from:
- `/GroceryGuru/PRODUCT_OVERVIEW.md` (Section 3: Intelligence Features, core functionality)
- Existing app architecture and feature documentation

---

**Next Steps:**
1. Review and refine content
2. Separate design exercise for FAQ page layout
3. Implementation after design is approved
