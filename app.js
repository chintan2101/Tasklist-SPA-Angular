var myApp = angular.module('myApp',['ui.bootstrap']);

myApp.service('main', function() {
	
	this.id="";
	this.flag=true;
  this.user="";
  this.userid="";
 
});


myApp.controller('mainController',['$scope','main',function($scope,main) {

        $scope.tasklist= [{"title": "Task 1", 
                          "taskname" : [{
                                          "title" : "Task 1.1.",
                                          "parent" : "Task 1",
                                          "Priority":"Major",
                                        "Status" : "ToDO",
                                         "DueDate": "6/2/2016",
                                         "DateCreated" :"5/1/2016 2:33PM",
                                         "DateModified" : "5/2/2016 1:22PM"

                                       }],
                          "Priority":"Major",
                          "Status" : "ToDO",
                           "DueDate": "6/2/2016",
                           "DateCreated" :"5/1/2016 2:33PM",
                           "DateModified" : "5/2/2016 1:22PM"},

                         {"title": "Task 2", 
                         "taskname" :[ {
                                          "title" : "Task 2.1.",
                                           "parent" : "Task 2",
                                          "Priority":"Major",
                                          "Status" : "ToDO",
                                          "DueDate": "6/2/2016",
                                         "DateCreated" :"5/1/2016 2:33PM",
                                         "DateModified" : "5/2/2016 1:22PM"
                                       }],
                        "Priority":"Major",
                        "Status" : "In Progress",
                         "DueDate": "6/3/2016",
                         "DateCreated" :"5/1/2016 4:33PM",
                         "DateModified" : "5/2/2016 4:22PM"}],
        
        $scope.status = false;
       

        $scope.createTask= function()
        {
      $scope.status = true;
      $scope.title = "";
    	 $scope.pvalue = "";
       $scope.svalue = "";
         $scope.duedate = "";
         main.flag=true;
        }

             $scope.cancleTask= function()
        {
      $scope.status = false;
     
        }

          $scope.showData= function(index)
        {main.id = index;
      $scope.status = true; 
          // console.log(index);
      	$scope.title = $scope.tasklist[main.id].title
      	$scope.pvalue = $scope.tasklist[main.id].Priority;
        $scope.svalue = $scope.tasklist[main.id].Status;
        $scope.duedate = $scope.tasklist[main.id].DueDate;
        $scope.parentvalue="none";
        main.flag=false;
        
        }

          $scope.showsubtaskData= function(user)
        {


           main.user = user;
           $scope.status = true; 
          console.log(user);
        for(i=0;i<$scope.tasklist.length;i++)
        {
           console.log(user.Status);
              // console.log($scope.tasklist[i].taskname[main.id].parent);
                 if($scope.tasklist[i].title === user.parent )
                 {
                  var index = $scope.tasklist[i].taskname.indexOf(user);
                  main.userid=index;
                  console.log("hi"+index );
                   $scope.title = user.title;
                    $scope.pvalue = user.Priority;
                    $scope.svalue =user.Status;
                    $scope.duedate = user.DueDate;
                    $scope.parentvalue = user.parent
                 }

        }
        // $scope.title = $scope.tasklist[main.id].taskname[main.id].title;
        // $scope.pvalue = $scope.tasklist[main.id].Priority;
        // $scope.svalue = $scope.tasklist[main.id].Status;
        // $scope.duedate = $scope.tasklist[main.id].DueDate;
        main.flag=false;
        
        }

    $scope.saveTask= function()
        {
    	if(main.flag==true){
     
    		 $scope.today = new Date();
         for(i=0;i<$scope.tasklist.length;i++)
      {
         
         if($scope.parentvalue == $scope.tasklist[i].title )
         {
           
        	    $scope.temp = {"title": $scope.title, 
                         "parent" : $scope.parentvalue,
        	    	        "Priority":$scope.pvalue,
        	    	        "Status" : $scope.svalue,
        	    	         "DueDate": $scope.duedate,
        	    	         "DateCreated" : $scope.today,
        	    	         "DateModified" :  $scope.today};
             $scope.tasklist[i].taskname.push( $scope.temp);

              console.log($scope.tasklist[i].taskname);

         }
                      
      }

      if($scope.parentvalue == "none")
      {
           $scope.temp = {"title": $scope.title, 
                          "taskname" : [],
                        "Priority":$scope.pvalue,
                        "Status" : $scope.svalue,
                         "DueDate": $scope.duedate,
                         "DateCreated" : $scope.today,
                         "DateModified" :  $scope.today};
             $scope.tasklist.push( $scope.temp);
      }
    }
    	if(main.flag==false){
    	    	  

                        if($scope.tasklist[main.id])
                        {
                          console.log("1");
        	            	$scope.tasklist[main.id].title = $scope.title ;  
                         $scope.tasklist[main.id].Priority = $scope.pvalue ;  
                        $scope.tasklist[main.id].Status = $scope.svalue ;   
                         $scope.tasklist[main.id].DueDate = $scope.duedate ;  
                          $scope.tasklist[main.id].DateCreated =  $scope.today ;  
                           $scope.tasklist[main.id].DateModified = new Date();
                          }
                    else
                    {
                        console.log("2");
                            for(i=0;i<$scope.tasklist.length;i++)
                                  {
                                     
                                     if(main.user.parent == $scope.tasklist[i].title )
                                     {
                                         console.log(main.user.title);
                                          // $scope.temp = {"title": $scope.title, 
                                          //            "parent" : $scope.parentvalue,
                                          //           "Priority":$scope.pvalue,
                                          //           "Status" : $scope.svalue,
                                          //            "DueDate": $scope.duedate,
                                          //            "DateCreated" : $scope.today,
                                          //            "DateModified" :  $scope.today};
                                            $scope.tasklist[i].taskname[main.userid].title =   $scope.title ;
                                            $scope.tasklist[i].taskname[main.userid].Priority =   $scope.pvalue ;  
                                             $scope.tasklist[i].taskname[main.userid].Status =   $scope.svalue ;
                                            $scope.tasklist[i].taskname[main.userid].DueDate =   $scope.duedate ; 
                                               $scope.tasklist[i].taskname[main.userid].DateModified =    new Date();                                        console.log($scope.tasklist[i].taskname);

                                     }
                                                  
                                  }
                          }









    	}
        }
        $scope.deleteTask= function()
        {
         $scope.status = false;

         if($scope.tasklist[main.id])
         {
          $scope.tasklist.splice(main.id,1);
        }
        else
        {

         for(i=0;i<$scope.tasklist.length;i++)
         {

           if(main.user.parent == $scope.tasklist[i].title )
           {
             console.log(main.user.title);
             $scope.tasklist[i].taskname.splice( main.userid,1);


           }

         }
       }



     }



   






}])// controller