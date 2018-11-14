CRUD
====

- **C** Create
- **R** Read
- **U** Update
- **D** Delete

HTTP Methods
============

- **GET** Read
- **POST** Create
- **PUT** Update
- **DELETE** Delete

URL / URI / ENDPOINT
====================

https://google.com -> DNS -> 147.32.68.110 HTTP -> GET -> index.html -> 
```html
<html>

</html>
```

https://swapi.co/api/people -> GET -> JSON -> 

```json
"{
  \"results\": [{\"name\": \"Luke\"}]
}"
```

https://backpack.boisecodeworks.com/students/jake/grade -> GET

```javascript
if(hasAccess()){
  //give grade
}else{ 
  //go away
}
```

https://backpack.boisecodeworks.com/students/sally/grade -> POST

```JSON
{
  "assignmentId": "21925308130940dsafdsa",
  "grade": 70
}
```
```javascript
if(hasAccess()){
  //give grade
}else{ 
  //go away
}
```
https://backpack.boisecodeworks.com/students/sally/grade/21925308130940dsafdsa -> PUT

```JSON
{
  "grade": 80
}
```
```javascript
if(hasAccess()){
  //give grade
}else{ 
  //go away
}
```

https://backpack.boisecodeworks.com/students/sally/grade/21925308130940dsafdsa -> DELETE

```javascript
if(hasAccess()){
  //give grade
}else{ 
  //go away
}
```







