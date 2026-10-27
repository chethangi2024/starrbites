# Premium Farm

## Mission
Create implementation-ready, token-driven UI guidance for Premium Farm that is optimized for consistency, accessibility, and fast delivery across content site.

## Brand
- Product/brand: Premium Farm
- URL: https://tiigertrail.com/
- Audience: readers and knowledge seekers
- Product surface: content site

## Style Foundations
- Visual style: structured, tokenized, content-first
- Main font style: `font.family.primary=Poppins`, `font.family.stack=Poppins, sans-serif`, `font.size.base=14px`, `font.weight.base=200`, `font.lineHeight.base=21px`
- Typography scale: `font.size.xs=10px`, `font.size.sm=12px`, `font.size.md=13px`, `font.size.lg=14px`, `font.size.xl=15px`, `font.size.2xl=16px`, `font.size.3xl=18px`, `font.size.4xl=20px`
- Color palette: `color.text.primary=#faf9f4`, `color.border.muted=#9b7a2e`, `color.text.tertiary=#183222`, `color.text.inverse=#cc3366`, `color.surface.base=#000000`, `color.surface.muted=#ffffff`, `color.surface.raised=#5a4026`, `color.surface.strong=#141414`
- Spacing scale: `space.1=5px`, `space.2=6px`, `space.3=8px`, `space.4=10px`, `space.5=12px`, `space.6=13px`, `space.7=14.4px`, `space.8=15px`
- Radius/shadow/motion tokens: `radius.xs=5px`, `radius.sm=10px` | `motion.duration.instant=300ms`, `motion.duration.fast=350ms`, `motion.duration.normal=400ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (66), buttons (40), navigation (2), lists (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
