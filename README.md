# Ambee_Task
End-to-end MEAN app with microservice concept



1) What was the approach to solve this task

	1) First i have created 2 collections in mongodb	
		-- sensorData 
			In sensor collection we will have all the data which was pushed from the sensor.
		-- userData
			In userData collection we will store user data who ever comes to check the air condition.

-- note -- here as we are implementing this with microservices we can use one mongodb and other sql,sqlite,cassandra,redis,etc


	2) Backend
	Library and framwork used : Nodejs, mongodb , express , mongoose

		-- In backend folder we have	
			-- sensor app
			-- user app 
				so as to implement microservice architecture.

		-- sensor app has its own 
			--model
			--app.js to start the app
			--its own logic to perform task

		-- user app has its own 
			--model
			--app.js to start the app
			--its own logic to perform task


	3) Frontend
	Library and framwork used : Angular, HTML5 , css

		-- In frontend we have used MVC architecture so as to have better transparency of code (We can use this in backed as well as express provide routing feature)

		-- Some of the features	
			-- Routing
			-- interface
			-- services
			-- dependency injection
			-- client side validation



2) Pre requirement to run this
	
		-- Should have NPM
		-- Should have Node
		-- Should have Angular cli
		-- Should have mongodb

3) How to run and what to run
		
		-- go to AMBEE/backend/sensor and run command app.js 
			-- this will start sensor service

		-- go to AMBEE/backend/user and run command app.js
			-- this will start user service

		-- go to AMBEE/frontend/app and run command ng serve
			-- this will start angular app

		-- Go to browser and insert url http://localhost:4200
		-- you a good to go.

3) Appication Flow

		-- Login page
			-- Enter name and email
			-- hit submit
			-- it will route to dashboard
			-- at this time user service will be called and data will be stored in db.
			-- if email already exist then it will not allow user to go forward to next step.

		-- Select any of one tab to perform calculation
			-- enter the required field 	
			-- click calculate
			-- at this time sensor service will be called and calculation will happen and accordingly data will come back to user and show it on screen.




 
