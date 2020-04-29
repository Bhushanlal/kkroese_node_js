## Section 1 - (5 mins)
# 1) Explain the difference between an abstract class and an interface.
 
    a) if we don't know anything about implementations just we have requirements specifications then we have to use the interface. But if we have implementation but not completely then we have to use abstract class
	
    b) every method inside the interface is always public or abstract but in abstract class not every member is public or abstract.
	
    c) every variable is public,static and final in interface but this is not in the case of abstract class.

# 2) What is the purpose of getters and setters in a class?

	Getters are use to access the property of an object and setters are used to change the property. 
	Suppose we have an object  with “first Name” and “Last Name” but we want to display the “full name” somewhere then we use the getter(get()) and setter (set())  
    E.g 

    var person  = {
    firstName:"varun",
    lastName:"Singh",
        get fullName(){
            return `${person.firstName} ${person.lastName}`
        },
        set fullName(value){
            return  value  
        }
    };

    console.log(‘getter’, person);    // output  “varun Singh”

    person.fullName = 'Mohan Singh'     // setting new value

    console.log(‘setter’, person); // output  “Mohan Singh”


	
## Section 2 - Testing - (5 mins)

# 3) Explain the purpose of black box testing
	 
      Black box testing is used to check the fucntional require,mnts of the applciation. Here we only gives the different input and check whether we are getting the expected output or not. 

# 4) In your opinion what are the benefits of test cases
	
	Major benifites fo test cases is we will test a functionality very easy and if in future there is a chnage happend in the module/functionality then we know what we need to test. It will save our testing time and we are more focused on developing . 

## Section 3 - NodeJS specific questions - (5 mins)
   # 5) What is an error first callback, and what is the reason for this pattern existing?
	
        Error first callback functions are those functions which accept the “error” parameter as in the first argument and then the result of the actual function. 
        The main reason for this pattern is that if our callback function is not able to handle the request it would send an error first to the calling function and say something is wrong instead of executing the business logic inside the function. 


   # 6) Explain the difference between fs.readSync and fs.read (File System module in Nodejs)
        
        fs.readFileSync() is used to read the file synchronously. Program will wait until the file operations are not done. 

        fs.readFile() is used to read a file in asynchronous manner. It is taking a callback function. So after doing any opration by this function it will give you the result. And node count doesn't wait for the output of this this function.  
   # 7) What tasks do you feel should be done asynchronously?

	All those task which are not dependent on the other output of the functions. We just out a callback function and capture the asynchronous function response

## Section 4 - NodeJS coding - (15 - 20 mins)

   # 8) (a) is a trivial example of callback hell
        Refactor the code for the better, using any techniques you are aware of
        Place code in load_contents.js
        Take path as an argument

## Section 5 - NodeJS coding with classes - Fruit Basket - (40 - 50 mins)
            a) Load data from file `input.json`, the file contents are given in (i) Example input data
            b) You must create and use a FruitBasket class and a Fruit class.
            i) You may create any additional classes based on your approach 
            c) Implement code that will answer the following questions:
            i) How many fruits are in the basket
            ii) How many fruits of a specific type are in the basket
            iii) How heavy is the basket
            d) Output the data to file `output.json`, the file format should match (ii) Example output data for the given input data in (i), this is simply a json file
            
            ----------------------------------------------------------------
   # e) Create a success scenario black box test
      
                Answer: black box testing senario is expecting total fruits count is 4  by following input file
                [{
                "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
                "max_weight": 8,
                "contents": [{
                    "type": "apple",
                    "color": "green",
                    "weight": 1.5
                }, {
                    "type": "apple",
                    "color": "red",
                    "weight": 1
                }, {
                    "type": "pear",
                    "color": "green",
                    "weight": 2.5
                },{
                    "type": "banana",
                    "color": "yellow",
                    "weight": 2.5
                }]
                }]



      


## Section 6 - NodeJS test cases - Fruit Basket 
    This is an optional section and does not need to be completed if you have already spent more than an hour and a half on the previous sections

   # f) Create a failure scenario black box test
    Failure senario is getting expecting total fruits count is 2 by following input 
    [{
        "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
        "max_weight": 8,
        "contents": [{
        "type": "apple",
        "color": "green",
        "weight": 1.5
    }, {
        "type": "apple",
        "color": "red",
        "weight": 1
    }, {
        "type": "pear",
        "color": "green",
        "weight": 2.5
    },{
        "type": "banana",
        "color": "yellow",
        "weight": 2.5
    }]
    }]


   # g) Write the unit test cases you feel are most relevant
    
        1: check for the fruit count is accurate
        2: check for the fruits of specific types are accurate
        3: check for the basket weight is accurate
        4: did we created two functions are not as required
        5: did we used both of them or not

