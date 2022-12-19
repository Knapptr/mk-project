# Tasks

- [ ] Tie collaborating objects together where nesc @J
- [ ] Basic Views for data types / basic page layout  @J
- [ ] Factory for instantiating models from DB @T
- [x] Express boilerplate @T
- [x] in memory dev db (db.json) @T

## Standards
- Use getters and setters, throw descriptive error inside setter. Users should not set with . notation. (task.title = "dont do this")(task.setTitle("do this"))


## Actions 

## User management
- [ ] Create an account
  - GET /register (view)
  - POST /register (submission)
- [ ] Login
  - GET /login (view)
  - POST /login (submission)
- [ ] Home / Dashboard
  - GET /home
- [ ] Update user settings
  - GET /profile (view) 
  - POST /profile (submission)

### Tasks
- [ ] Create a task
    - GET /tasks/add (view)
    - POST /tasks (submission)
- [ ] Delete a task
    - GET /tasks/:id/delete (view)
    - DELETE /tasks/:id (submission)
- [ ] Update a task
    - GET /tasks /:id (view)
    - PUT /tasks/:id (submission)
- [ ] View all tasks
    - GET /tasks
- [ ] View a task
    - GET /tasks/:id
#### Comments
- [ ] Comment on a task
    - GET /tasks/:id (view)
    - POST /tasks/:id/comments (submission)
- [ ] Comment on a task comment
    - GET /tasks/:id (view)
    - POST /tasks/:task_id/comments/:comment_id (view)
- [ ] Delete a comment
    - GET /taskts/:id (view)
    - DELETE /tasks/:task_id/comments/:comment_id (view)

### Requirements
- [ ] Create a requirement
    - GET /requirements/add (view)
    - POST /requirements/ (submision)
- [ ] Delete a requirement
    - GET /requirements/:id/delete (view)
    - DELETE /requirements/:id (submission)
- [ ] Update a requirement
    - GET /requirements/:id (view)
    - PUT /requirements/:id (submission)
- [ ] View all requirements
    - GET /requirements
- [ ] View requirement
    - GET /requirements/:id
#### Comments
- [ ] Comment on a requirement
    - GET /requirements/:id (view)
    - POST /requirements/:id/comments (submission)
- [ ] Comment on a task comment
    - GET /requirements/:id (view)
    - POST /requirements/:requirement_id/comments/:comment_id (view)
- [ ] Delete a comment
    - GET /requirements/:id (view)
    - DELETE /requirements/:requirement_id/comments/:comment_id (view)


