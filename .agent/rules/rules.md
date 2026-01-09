# Workspace Rules

1.  **Flowbite Usage**:

    - For composing Figma screens, **always** use Flowbite components, styles, and tokens.
    - The Figma designs are built using the Flowbite Design System, so implementation must match this strict requirement.

2.  **Theming Strategy**:

    - **Hotel Side Screens**: Always use the **Enterprise** theme.
    - **DMC Side Screens**: Always use the **Mono** theme.
    - Ensure the correct `data-theme` attribute is applied to the root or container when switching contexts.

3.  **Testing Policy**:

    - **Never** perform testing (manual verification steps that require interaction) unless explicitly instructed to do so.
    - Focus solely on implementation and building features.

4.  **Storybook Documentation**:
    - **Always** create or update Storybook stories when a new component is added.
    - **Always** update Storybook stories when an existing component is modified.
    - Stories should include all props, variants, and states as documented in Figma.
    - Story files should be co-located with the component (e.g., `Button.js` → `Button.stories.js`).
