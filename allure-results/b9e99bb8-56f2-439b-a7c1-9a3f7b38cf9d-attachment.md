# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - button "Guide" [ref=e9] [cursor=pointer]
        - generic [ref=e11]:
          - link "YouTube Home" [ref=e12] [cursor=pointer]:
            - /url: /
          - generic [ref=e16]: PK
        - button "Skip navigation" [ref=e20] [cursor=pointer]:
          - generic [ref=e21]: Skip navigation
      - generic [ref=e25]:
        - search [ref=e26]:
          - generic [ref=e27]:
            - combobox "Search" [expanded] [ref=e30]
            - button "Search" [ref=e31] [cursor=pointer]
        - generic [ref=e34]:
          - button "Search with your voice" [ref=e36] [cursor=pointer]
          - tooltip "tooltip"
      - generic [ref=e43]:
        - button "Settings" [ref=e48] [cursor=pointer]
        - link "Sign in" [ref=e52] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620
          - generic [ref=e55]: Sign in
  - navigation [ref=e59]
  - main [ref=e61]:
    - generic [ref=e71]:
      - generic [ref=e72]: Try searching to get started
      - generic [ref=e73]: Start watching videos to help us build a feed of videos you'll love.
```