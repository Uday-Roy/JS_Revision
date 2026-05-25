<%@ page language="java" contentType="text/html;charset=UTF-8" %>

    <%! // Recursive function int factorial(int number){ if(number==0 || number==1){ return 1; } return number *
        factorial(number-1); } %>

        <!DOCTYPE html>
        <html>

        <head>

            <title>Result</title>

            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    margin-top: 50px;
                }

                .resultBox {
                    width: 300px;
                    border: 1px solid gray;
                    margin: auto;
                    padding: 20px;
                }

                a {
                    text-decoration: none;
                }
            </style>

        </head>

        <body>

            <div class="resultBox">

                <% String value=request.getParameter("number"); int number=Integer.parseInt(value); int
                    result=factorial(number); %>

                    <h2>Result</h2>

                    <h3>
                        Factorial of <%=number%> = <%=result%>
                    </h3>

                    <br>

                    <a href="index.html">
                        Go Back
                    </a>

            </div>

        </body>

        </html>