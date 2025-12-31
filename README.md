# 🔮 YesOrNo API

> A minimalist, pure decision-making API for your binary questions.

The **YesOrNo API** is a lightweight microservice designed to provide instant, binary answers ("Yes" or "No") to any question you might be pondering. Whether you need a random decision or a deterministic response for testing, this API delivers with zero overhead.

---

## 🚀 Features

- **🔹 Lightweight**: Built with Express, zero bloat.
- **🔹 Pure JSON**: Returns a unique, clean response format.
- **🔹 Flexible Logic**: Get random answers or force a specific outcome.
- **🔹 Zero Config**: ready to run out of the box with `npm start`.

---

## 🛠️ Installation & Usage

### 1. Setup
Clone the repo and install dependencies:

```bash
npm install
```

### 2. Start the Server
Launch the API on port 3000:

```bash
npm start
```

### 3. Ask the Oracle

| Scenario | Endpoint | Response |
| :--- | :--- | :--- |
| **Random Decision** | `GET /answer` | `{"Yes"}` or `{"No"}` |
| **Force "Yes"** | `GET /answer?result=right` | `{"Yes"}` |
| **Force "No"** | `GET /answer?result=wrong` | `{"No"}` |

---

## 🔌 API Reference

### `GET /answer`

**Query Parameters:**
- `result` (optional):
  - `right`: Forces a **Yes** response.
  - `wrong`: Forces a **No** response.
  - *Missing*: Returns a pseudo-random **Yes** or **No**.

**Response Body:**
The API returns a strictly formatted JSON-like string:
```json
{"Yes"}
```
*or*
```json
{"No"}
```

---

## 👨‍💻 Author

**Ruturaj Sharbidre**
