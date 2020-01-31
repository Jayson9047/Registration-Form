//Name : uncheckStudent
		//Parameters: None
		//returns: none
		//Description: This function is called when the user clicks on the "Faculty" radio button. This function unchecks all the check boxes that belong to the "Student" 
		// 			   radio button. In short, if a user is a faculty member, he can't choose any option that belongs to the student.
		function uncheckStudent()
		{
			document.getElementById("choice1").style.display = "none";
			document.getElementById("choice").style.display = "block";
			document.getElementById('memberError').innerHTML= "";
			var items=document.getElementsByName('studentChoices');
			for(var i=0; i<items.length; i++)
			{
				if(items[i].type=='checkbox')
				{
					items[i].checked=false;
				}
			}
		}
		
		
		//Name : uncheckFaculty
		//Parameters: None
		//returns: none
		//Description: This function is called when the user clicks on the "Student" radio button. This function unchecks all the check boxes that belong to the "Faculty" 
		// 			   radio button. In short, if a user is a student, he can't choose any option that belongs to the faculty member.
		function uncheckFaculty()
		{
			document.getElementById("choice").style.display = "none";
			document.getElementById("choice1").style.display = "block";
			document.getElementById('memberError').innerHTML= "";
			var items=document.getElementsByName('facultyChoices');
			for(var i=0; i<items.length; i++)
			{
				if(items[i].type=='checkbox')
				{
					items[i].checked=false;
				}
			}
		}
		
		//Name : validate
		//Parameters: None
		//returns: bool valid
		//			True if all input is in correct syntax
		//			False if at least 1 input is incorrect
		//Description: This function is called on submission of the form. It checks if all the given inputs are valid or not. It checks the given name. Street address,
		//			   City,Province and Postal Code. This function is able to check if the given postal code is valid or not according to the chosen province. Any invalid 
		//			   information bounds this function to show error message. This function returns a boolean value. If all the inputs are valid, it returns true and the
		// 			   form gets submitted. Otherwise, it returns false and the form doesn't get submitted.
		function validate()
		{
			var NAME = document.getElementById("regName").value;
			var STREET = document.getElementById("streetName").value;
			var CITY = document.getElementById("cityName").value;
			var POSTALCODE = document.getElementById("pc").value;
			var nameMatch = NAME.match(/\b[^\d\s]+\b/g);
			var streetMatch = /^[0-9]+[\s]+[a-zA-Z\s]+$/;	//street has to start with a number followed by a space and then the words
			var cityMatch = /^[a-zA-Z\s]+$/;				//city name has to be alphabetical characters
			var pcMatch = /^[A-Za-z]+[0-9]+[A-Za-z]+[0-9]+[A-Za-z]+[0-9]/;	//postal code should be in this syntax:(alpha+numeric+alpha+numeric+alpha+numeric)
			var valid = true;
			if((NAME.length == 0) || (STREET.length == 0) || (CITY.length==0) || (POSTALCODE.length==0))
			{
				if (NAME.length == 0) {document.getElementById("nameError").innerHTML = "Please enter your First and Last name";}
				if (STREET.length == 0) {document.getElementById("streetError").innerHTML = "Please enter your Street Address";}
				if (CITY.length == 0) {document.getElementById("cityError").innerHTML = "Please enter your City Address";}
				if (POSTALCODE.length==0) {document.getElementById("pcError").innerHTML = "Please enter your Postal code";}
				if (document.registration.selectProvince.value == "0") {document.getElementById("provinceError").innerHTML = "Please select a province";}
				valid = false;
			}
			else
			{
				//name validation 
				if (nameMatch && nameMatch.length != 2) 	//first name and last name can only be 2 words
				{
					document.getElementById("nameError").innerHTML = "Please write only your First Name and Last Name with a space in between and use only alphabetic characters";
					valid = false;
				}
				else
				{
						var re = /^[A-Za-z\s]+$/;
						if(re.test(NAME))
						{document.getElementById("nameError").innerHTML = "";}
						else
						{
							document.getElementById("nameError").innerHTML = "Please enter only alphabetic characters";
							valid = false;
						}  
					
				}
				
				//Street validation
				if (STREET.match(streetMatch))	
				{
					document.getElementById("streetError").innerHTML = "";
				}
				else
				{
					document.getElementById("streetError").innerHTML = "Please enter the street number first followed by a space and the street name";
					valid = false;	
				}
				
				//city validation
				if(CITY.match(cityMatch))
				{
					document.getElementById("cityError").innerHTML = "";
				}
				else
				{
					document.getElementById("cityError").innerHTML = "Please enter only alphabetic characters";
					valid = false;				
				}
				
				//province validation
				if(document.registration.selectProvince.value == "0")
				{
					document.getElementById("provinceError").innerHTML = "Please select a province";
					valid = false;
				}
				else
				{
					document.getElementById("provinceError").innerHTML = "";
				}
				
				//postal code validation
				if(POSTALCODE.match(pcMatch))
				{
					//Alberta
					if(document.registration.selectProvince.value=="AB")
					{
						if(POSTALCODE.match(/^[tT]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for Alberta";
							valid = false;
						}
					}
					//British Columbia
					else if(document.registration.selectProvince.value=="BC")
					{
						if(POSTALCODE.match(/^[vV]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for British Columbia";
							valid = false;
						}
					}
					//Manitoba
					else if(document.registration.selectProvince.value=="MB")
					{
						if(POSTALCODE.match(/^[rR]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for Manitoba";
							valid = false;
						}
					}
					//New Brunswick
					else if(document.registration.selectProvince.value=="NB")
					{
						if(POSTALCODE.match(/^[eE]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for New Brunswick";
							valid = false;
						}
					}
					//NewFoundland and Labrador
					else if(document.registration.selectProvince.value=="NL")
					{
						if(POSTALCODE.match(/^[aA]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for NewFoundland and Labrador";
							valid = false;
						}
					}
					//Nova Scotia
					else if(document.registration.selectProvince.value=="NS")
					{
						if(POSTALCODE.match(/^[bB]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for Nova Scotia";
							valid = false;
						}
					}
					//Northwest Territories
					else if(document.registration.selectProvince.value=="NT")
					{
						if(POSTALCODE.match(/^[xX]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for Northwest Territories";
							valid = false;
						}
					}
					//Nunavut
					else if(document.registration.selectProvince.value=="NU")
					{
						if(POSTALCODE.match(/^[xX]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for Nunavut";
							valid = false;
						}
					}
					//Ontario
					else if(document.registration.selectProvince.value=="ON")
					{
						if(POSTALCODE.match(/^[kKlLmMnNpP]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for Ontario";
							valid = false;
						}
					}
					//Prince Edward Island
					else if(document.registration.selectProvince.value=="PE")
					{
						if(POSTALCODE.match(/^[cC]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for Prince Edward Island";
							valid = false;
						}
					}
					//Quebec
					else if(document.registration.selectProvince.value=="QC")
					{
						if(POSTALCODE.match(/^[gGhHjJ]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for Quebec";
							valid = false;
						}
					}
					//Saskatchewan
					else if(document.registration.selectProvince.value=="SK")
					{
						if(POSTALCODE.match(/^[sS]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for Saskatchewan";
							valid = false;
						}
					}
					//Yukon
					else if(document.registration.selectProvince.value=="YT")
					{
						if(POSTALCODE.match(/^[yY]+[0-9A-Za-z]/))
						{
							document.getElementById("pcError").innerHTML = "";
						}
						else
						{
							document.getElementById("pcError").innerHTML = "Please enter a valid postal code for Yukon";
							valid = false;
						}
					}
					else
					{
						document.getElementById("pcError").innerHTML = "Please enter your province first";
					}
										
				}
				else
				{
					document.getElementById("pcError").innerHTML = "Please enter the postal code using this syntax:(alpha+numeric+alpha+numeric+alpha+numeric)";	
					valid = false;
				}
				
				//member validation
				if(document.getElementById('Student').checked) 
				{
					document.getElementById('memberError').innerHTML= "";
				}else if(document.getElementById('Faculty').checked) 
				{
					document.getElementById('memberError').innerHTML= "";
				}	
				else
				{
					document.getElementById('memberError').innerHTML= "Please select your membership.";
					valid = false;
				}
			}
			
			
			return valid;
		}
		
		