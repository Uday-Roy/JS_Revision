<%@ page language="java" contentType="text/html;charset=UTF-8" %>

    <%! // Recursive function for factorial int factorial(int num) { if(num==0 || num==1) { return 1; } return num *
        factorial(num - 1); } %>

        <!DOCTYPE html>
        <html>

        <head>
            <title>Recursion Example</title>

            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    margin-top: 50px;
                }

                .mainBox {
                    border: 1px solid gray;
                    width: 300px;
                    margin: auto;
                    padding: 20px;
                }

                input {
                    padding: 8px;
                    width: 150px;
                }

                button {
                    padding: 8px 15px;
                    margin-top: 10px;
                }
            </style>
        </head>

        <body>

            <div class="mainBox">

                <h2>Factorial Using Recursion</h2>

                <form method="post">

                    <input type="number" name="number" placeholder="Enter number" required>

                    <br><br>

                    <button type="submit">
                        Calculate
                    </button>

                </form>

                <% String value=request.getParameter("number"); if(value !=null){ int number=Integer.parseInt(value);
                    int result=factorial(number); %>

                    <h3>
                        Factorial of <%=number%> = <%=result%>
                    </h3>

                    <% } %>

            </div>

        </body>

        </html>