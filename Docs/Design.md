```mermaid
---
Container-presenter pattern
---
flowchart TD
A@{ label: "Container Component" }
B@{ label: Presenter Component }

A-- Passing data an state with @Input -->B

B-- Sending events with @Output  -->A
```

---

## Components structure

```
/src/app/shared/
├── app
│   ├── components
│   │   ├── media
│   │   │   ├── MediaContainerComponent
│   │   │   └── MediaPresenterComponent
│   │   │   └── MediaDetailComponent
│   │   │   │    ├── MediaDetailPictureComponent
│   │   │   │    └── ...
│   │   ├── search
│   │   │   └── SearchComponent
│   │   ├── tabs
│   │   │   └── TabSwitcherComponent
```
