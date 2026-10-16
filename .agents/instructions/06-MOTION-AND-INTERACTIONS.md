# Motion and interaction standards

Motion should be intentional, calm, responsive, refined, natural, and consistent. It should explain a change of state, reinforce hierarchy, or improve orientation. Content must remain available when JavaScript or animation is unavailable. Honor `prefers-reduced-motion` and never delay essential navigation.

## Choose the simplest tool

| Tool                           | Suitable use                                                                      | Guardrail                                                                                                                 |
| ------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| CSS transitions                | Hover, underline, focus, border, opacity, small transforms                        | Default for routine interaction                                                                                           |
| Motion                         | React menus, dialogs, expandable content, shared layouts, modest entrances        | Avoid blanket page animation                                                                                              |
| GSAP                           | Choreographed hero, editorial timeline, complex SVG or justified scroll narrative | Register plugins and clean up contexts and listeners; not for routine hover                                               |
| Lenis                          | Smooth scrolling only if it improves this site                                    | Preserve anchors, history, forms, modals, touch, browser behavior, and reduced motion; never run competing scroll systems |
| React Bits / Motion Primitives | Sources for adaptable interactions                                                | Inspect source, compatibility, dependencies, license, accessibility, mobile behavior, and performance; apply NCOGA tokens |

Three.js/WebGL requires a compelling communication benefit unavailable through CSS, SVG, or ordinary React. Authentic photography and editorial layout have priority.

## Timing and behavior candidates

| Interaction          | Starting range |
| -------------------- | -------------- |
| Button hover         | 120–200ms      |
| Navigation indicator | 180–260ms      |
| Dropdown open        | 180–300ms      |
| Card response        | 180–280ms      |
| Section entrance     | 400–700ms      |
| Hero entrance        | 500–900ms      |
| Modal transition     | 200–350ms      |

These are tuning ranges, not universal fixed tokens. Prefer opacity and transform for routine animation; avoid layout thrashing. Review easing, perceived response, interruption, exit behavior, and motion hierarchy. Use the relevant Emil Kowalski or GSAP skill only after reading its instructions.

Avoid continuous purposeless marquees, excessive text splitting, every heading flying in, blanket scroll reveals, moving backgrounds, cursor followers, mobile parallax, scroll-jacking, large layout shifts, hover-only interactions, and animations that obscure focus or slow a task. Test touch, keyboard, low-powered devices, route changes, browser history, scroll restoration, reduced motion, and cleanup. See [design direction](03-DESIGN-DIRECTION.md) and [quality standards](09-QUALITY-AND-TESTING.md).
