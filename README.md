# Proposed Data Models for beer-club.js

# Page List

- Week Detail View (Drink List for that week)
- Week List
- Drink List


### Week
```
var week = {
  id: {String} Firebase ID
  date: {Number} Unix timestamp
  hosts: {String[]?} User email's of hosts.
  title: {String} What sort of club is this?
}
```

### Drink
```
var drink = {
  id: {String} Firebase ID
  weeks: {Week[]?} Weeks this was served
  name: {String} Name of the drink
}
```


### Host
```
var user = {
  id: {String} Email
  name: {String} Name of host
}
```

# Actions
Adding a week
Removing a week
Adding a host to a week
Removing a host from a week
Adding drinks to a week
Removing drinks from a week
