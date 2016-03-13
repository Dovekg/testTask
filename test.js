db.task.insert({
  agreement: 1,
  level: 1,
  description: "this is the first text",
  email: "test@test.com",
  phone: "12312312412",
  file: "cuicuicuicicuiuicui",
  pay: {
      budget: 1200,
      method: 2,
      account: "12344124",
      verified: 0
  },
  complished: 0,
  createdAt: Date.now()
})

{
  "agreement": 1,
  "level": 1,
  "task_description": "This is the first page",
  "email": "admin@admin.com",
  "phone": "18666866622",
  "file": {
      "data_file": "http://localhost/app.jpg",
      "self_file": "http://localhost/app2.jpg"
  },
  "pay": {
      "budget": 1200,
      "pay_method": 1,
      "account": "kaigezhang"
  }
}
