# Workflow Design Hierarchy Infographic

Use `guidelines.md` as the required visual, brand, format, logo, and design reference for this image. Do not duplicate
the guideline content in the output; apply it.

Create a premium executive LinkedIn infographic that explains the hierarchy of a PICMI workflow.

## Title

Workflow Design Hierarchy

## Core Message

A workflow is the complete journey a participant follows. It is made from pages, page items, reusable Library Items,
rules, routing, and checking tools.

## Infographic Structure

Show the hierarchy as a clear governance-style tree or layered architecture diagram.

```text
Workflow
The full application flow a participant completes

├── Linked Opportunities
│   Employement jobs, service proposals that use this workflow
│
├── Pages
│   The main sections or screens in the participant experience
│
│   ├── Page Title / Intro Content
│   │   Usually powered by a Content Block
│   │
│   └── Page Items
│       The things the participant sees or completes on that page
│
│       ├── Questions
│       │   Collect answers from the participant
│       │
│       ├── Information Fields
│       │   Collect structured participant, worker, or organisation information
│       │
│       ├── Contracts
│       │   Show contract or document templates
│       │
│       └── Content Blocks
│           Reusable display content, such as:
│           - Heading
│           - Image
│           - Video
│           - Data / display-only content
│
├── Rules
│   Control how items behave
│
│   ├── Required Rules
│   │   Decide whether an item must be completed
│   │
│   ├── Visibility Rules
│   │   Decide when an item is shown or hidden
│   │
│   └── Validation Rules
│       Control what counts as a valid response
│
├── Routing
│   Decides what happens after the workflow is submitted
│
│   ├── Conditional Routes
│   │   Actions triggered when answers match certain rules
│   │
│   └── Default Route
│       What happens if no conditional route matches
│
└── Review / Preview
    Ways to check the workflow before using it

    ├── Preview
    │   See what the participant will experience
    │
    └── Review
        Audit the workflow structure, content, rules, and export it
```

## Simpler User Mental Model

Include this as a small callout or bottom strip.

```text
Workflow
└── Pages
    └── Items
        └── Linked Library Items
```

## What Each Level Means

Include these definitions as concise side notes or a compact glossary panel.

- **Workflow**: the complete application journey.
- **Page**: a screen or section inside that journey.
- **Item**: something placed on a page.
- **Library Item**: reusable content linked into the workflow, such as a Question, Content Block, Information Field, or
  Contract.
- **Rules**: decide whether items are shown, required, or valid.
- **Routing**: decides what happens after the participant completes the workflow.

## Visual Direction

- Make the hierarchy easy to scan on mobile.
- Use a calm executive information-architecture style, not a software screenshot.
- Emphasise traceability from Workflow to Pages to Items to Library Items.
- Keep the simpler mental model visually distinct from the detailed hierarchy.
- Use participant terminology, not applicant terminology.
