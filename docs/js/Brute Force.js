
// these are the login credentials and the relevant pages . This is a multi dimentional array. the first element array is userID , second is password
// the third it the page name of the user , Note this is supposed to be secured. But for demonstration  it is kept here.
const logins = [["admin","admin1234","admin page"]
                ,["matthew","garfield!","matthew page"]
                ,["Queen","gucci97","queen page"]
                ,["markIntern","markiplier1337","mark intern page"]
                ,["Neo","matrix3","keanu page"]];


//this is to have a break to break the brute force loop. Since it is async , we can exit the while loop by turning this to false
let looping=true;
// The async function tp start the brute force. Note this function is asynchronous. This is so we can see the results while the loop is happening.
async function startBruteForce(strings)
 {
    // setting intitials
    looping=true;
    let guessedPassword="";

    // this to make the passwords take upto 7 more letters at the end of the guess password. like admin + 1 + 2 + 3
    let i=0;
    let j=0,k=0,l=0,m=0,n=0,o=0;

    // Gets the Guess Login ID
    var guessID=document.getElementById("guessID").value;

    //gets the first text of the password. The function will try it first And then add more dictionary elements to loop through the login.
    var guess=document.getElementById("guessPassword").value;
    
    // this is so the function presses the button automaticlly.
    var loginButton = document.getElementById("loginButton");

    //setting the User ID
    document.getElementById("UserID").value=guessID;

    // reset success page
    document.getElementById("Result").innerHTML="";

    // the loop
    while (looping)
    {
        // this just demostration purposes. This website login has a flaw where it gives success directly. We are going to use that to check if our password
        // is cracked. 
        if(document.getElementById("Result").innerHTML==="Success")
        {
            console.log("found "+guessedPassword);
            // set the output and the color to green
            document.getElementById("bruteForcedOutput").innerHTML = guessedPassword;
            document.getElementById("bruteForcedOutput").style.color = "#00ff00";
            // stop the loop 
            looping=false;
            // open a new window too.
            var myWindow = window.open("", "Found Password", "width=200,height=100");
            myWindow.document.write("<p>Found the password as :"+guessedPassword+"</p>");
            // stop the whole loop
            break;
        }

        // first set the password with the data from social engineering or any guesses
        guessedPassword=guess;
        // now add extra digits:    The digits added are from the strings dictionary
        guessedPassword=guessedPassword+strings[o]+strings[n]+strings[m]+strings[l]+strings[k]+strings[j]+strings[i];

        // Automatically put the value in the textbox
        document.getElementById("Password").value=guessedPassword;
        // Since we won't know the result. Just color it red . The next loop will tell if the password was cracked and turn it green.
        document.getElementById("bruteForcedOutput").innerHTML = guessedPassword;
        document.getElementById("bruteForcedOutput").style.color = "#ff0000";

        // click the login button.
        loginButton.click();

        // Just logging in console to see the result.
        console.log(guessedPassword);
        
        // Start the digit counter.
        i++;
        // this is the next digit. the digits are as  o , n , m , l , k , j , i
        // this gives us an upwards counter. so the extra characters added to the guess from "" or nothing to a full "#######". a total of 7 digits
        if(i>=strings.length)
        {
            i=0;
            j++;
        }
        if(j>=strings.length)
        {
            j=0;
            k++;
        }
        if(k>=strings.length)
        {
            k=0;
            l++;
        }
        if(l>=strings.length)
        {
            l=0;
            m++;
        }
        if(m>=strings.length)
        {
            m=0;
            n++;
        }
        if(n>=strings.length)
        {
            n=0;
            o++;
        }
        // Here we run out of all 7 digits. Keeping it simple to 7 digits for now.
        if(o>=strings.length){
            looping=false;
        }
        await new Promise(resolve => setTimeout(resolve, 50));  // this is where we setTimeout function to wait for 250 milliseconds. We set the while loop for 
                                                                //it to wait asyncronously. Promise allows to make this wait be async. This is to make
                                                                // the wait before we loop to another password login.
      }
      
  }

  // this is stop the bruteforce if it is taking too long
  function stopBruteForce(){
    looping=false;
  }

  // this is a simple login check. if that credentials are true then the specific page is opened
  function checkCredentials()
  {
    // gets the user ID
    var userID = document.getElementById("UserID").value;
    // get the password
    var password = document.getElementById("Password").value;
    // loop through all the login credentials
    for(var i = 0 ; i < logins.length; i++)
    {
        // if its a match , then open the login page.
        if(userID===logins[i][0] && password === logins[i][1])
        {
            console.log("logged");
            document.getElementById("Result").innerHTML="Success";
            // login page is store in folder login pages and have .html at the end of file name
            window.open("login pages/"+logins[i][2].toString()+".html");
            break;
        }
        else
        {
            // invalid login
            console.log("wrong password");
            document.getElementById("Result").innerHTML="Invalid Login";
        }
    }

  }
  // this is the dictionary. In a real dictionary , this would be an external file containing thousands of words to bruteforce
  const strings = [
    "",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "!",
    "@",
    "#"
  ];
