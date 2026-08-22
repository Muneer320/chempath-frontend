# ChemPath frontend (historical archive)

The actively runnable ChemPath teaching demo now lives in [Muneer320/ChemPath](https://github.com/Muneer320/ChemPath), with this interface integrated under [`frontend/`](https://github.com/Muneer320/ChemPath/tree/main/frontend). Use the parent repository's Docker Compose instructions to run the API and interface together. The integrated app has a local read-only graph, a working compound browser and path finder, and automated build and API checks.

This repository preserves the earlier standalone React frontend and its commit history. It is archived because the old deployment is no longer available and the frontend depended on a separate backend. Its original Create React App code and documentation are historical; use the integrated version for a functional demo. The interface explored searching compounds, comparing reaction routes, and displaying reagents and conditions. Integrating the frontend and backend exposed the need for stable compound IDs, a shared API contract, and a repeatable local setup.

The integrated project is a limited educational example with 21 compounds and 23 reaction variants, not a verified or complete reaction catalog. See its README for scope and setup.

MIT license; see [LICENSE](LICENSE).
