# Tasks

- [ ] Comments J - Branch: feature-Comments
- [ ] Requirements T - Branch: feature-Requirements
- [x] Interface for Task returned by factory J - Branch: feature-Tasks
- [ ] User factory and Interface T - Branch: feature-Users

## Questions:
- Do we want to use getters and setters on closure (private) properties?
    eg: The title of a task should not be modifiable by using task.title = '...', but seems silly to have a getTitle() method. 
    If we DO want to use setters and getters, do we want to throw an error on trying to use task.title == "..."? Or do we want to use our validation and sanitization there?

