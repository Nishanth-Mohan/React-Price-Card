import './App.css';
import Card from "./Card";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';



function App() {
  return (
    
    <div className='container'>
      <h1 className='text-center'>React Price Card</h1>
      <div className='row'>
      <Card 
      name="free" 
      price="$0/month" 
      user="single user" 
      storage ="50GB storage" 
      public="unlimited public projects" 
      Access="community access" 
      private="unlimited private projects" 
      privateDisabled={true} 
      support="dedictaed phone support" 
      supportDisabled={true} 
      subdomain="free subdomain" 
      subdomainDisabled={true} 
      status="monthly status reports" 
      statusDisabled={true}></Card>
      
      <Card name="plus" 
      price="$9/month" 
      user="5 users" 
      storage ="50GB storage" 
      public="unlimited public projects" 
      Access="community access" 
      private="unlimited private projects" 
      support="dedictaed phone support" 
      subdomain="free subdomain" 
      status="monthly status reports" 
      statusDisabled={true}> </Card>

      <Card name="pro" 
      price="$49/month" 
      user="unlimited users" 
      storage ="50GB storage" 
      public="Unlimited public projects" 
      Access="community access" 
      private="unlimited private projects" 
      support="dedictaed phone support" 
      subdomain="free subdomain" 
      status="monthly status reports"></Card>
      </div> 
    </div>
  );
}

export default App;