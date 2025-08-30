
## Search Libraries Endpoint

- **Endpoint**: `GET https://context7.com/api/v1/search`
- **Parameters**:
  - `query`: The search term for finding libraries (e.g., `react hook form`).[1]
- **Usage Example**:
  ```bash
  curl -X GET "https://context7.com/api/v1/search?query=react+hook+form" \
    -H "Authorization: Bearer CONTEXT7_API_KEY"
  ```
- **Response**:  
  Returns a JSON array of matching libraries with fields such as `id`, `title`, `description`, `totalTokens`, `totalSnippets`, `stars`, `trustScore`, and available versions.[1]

## Fetch Documentation Endpoint

- **Endpoint**:  
  `GET https://context7.com/api/v1/{library-id}`
  - Replace `{library-id}` (e.g., `vercel/next.js`) with the identifier found via the search API.[1]
- **Parameters**:
  - `type`: Response format (`txt`, `json`)
  - `topic`: Filter documentation by topic (e.g., `ssr`)
  - `tokens`: Limit length of the response
- **Usage Example**:
  ```bash
  curl -X GET "https://context7.com/api/v1/vercel/next.js?type=txt&topic=ssr&tokens=5000" \
    -H "Authorization: Bearer CONTEXT7_API_KEY"
  ```
- **Response**:  
  Returns documentation text or JSON, including title, description, source, code block, and other metadata.

## Summary Table

| Purpose                    | Endpoint                                            | Parameters                    | Response Format          |
|----------------------------|----------------------------------------------------|-------------------------------|-------------------------|
| Search libraries           | `/api/v1/search?query={searchTerm}`                | `query`                       | JSON library list[1] |
| Fetch documentation        | `/api/v1/{library-id}?type={fmt}&topic={topic}&tokens={limit}` | `type`, `topic`, `tokens`     | Text/JSON doc content[1] |

**Conclusion:**  
The Context7 API is designed for ease of use: search for libraries, then fetch docs all via RESTful HTTP GET requests with clear, practical parameters and structured responses.[1]

[1](https://context7.com/api/v1/search?query=react+hook+form)