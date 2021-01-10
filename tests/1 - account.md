# Account.js test suite
This test suite will test the following functionality:
* User registration
* User login/logout
* User account deletion
## 1 User registration
The test data will be executed in the following order.
###1.1 Valid registration
| Field      | Data               |
|------------|--------------------|
| Email      | email@example.com  |
| First name | Joe                |
| Last name  | Doe                |
| Password   | ExamplePassword123 |

###1.2 Duplicate registration
The above data will be used again.

###1.3 Length check registration
This data is long, so each field is collapsed for readability.

<details>
<summary>Email</summary>
exampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexample@emailemailemailemailemailemailemailemailemailemail.com
</details>
<details>
<summary>First name</summary>
JoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoe
</details>
<details>
<summary>Last name</summary>
JoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoe
</details>
Password is hashed so length is not an issue  
<br>

**Password**: ExamplePassword123

###1.4 Invalid format registration
Email is the only format restricted field, so the data is similar to test 1.1

| Field      | Data                      |
|------------|--------------------       |
| Email      | email@example             |
| First name | Joe                       |
| Last name  | Doe                       |
| Password   | AnotherExamplePassword123 |
