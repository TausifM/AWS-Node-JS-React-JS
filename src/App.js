import Users from "./component/Users.component";

function App() {
  // aws s3 bucket created name as user-processing-system-1 and 
  // aws cli install in windows then command aws configure
  // then user we have to create in iam, then that user we have to provide all permission in access adviser tab.
  // then create access id and access key access center like us-east-1 and output as json.
  // then in terminal aws s3 sync build/ s3://BUCKET NAME 
  // above command we have to run.
  // then in hoisting url your react project is live.
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
