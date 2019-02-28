## Documentation

#### Song Model:

| Key            | Value         |
| -------------  | ------------- |
| name           | string        |
| artist         | string        |
| primary_image  | string        |
| play_count     | number        |
| like_count     | number        |
| repost_count   | number        |
| comment_count  | number        |

#### Available Operations on this Model:

- Read One
- Read All
- Create
- Update
- Delete

---

##### Read One Song

Route: /api/songs/:id/

Method: GET

---

##### Read All Songs

Route: /api/songs

Method: GET

---

##### Add One Song

Route: /api/songs

Method: POST

---

##### Update One Song

Route: /api/songs/:id

Method: PUT

---

##### Delete One Song

Route: /api/songs/:id

Method: DELETE