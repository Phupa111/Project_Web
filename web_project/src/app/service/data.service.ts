export class DataService{
  apiEndpoint = 'http://localhost/WebApiGit';
  detail = new detail();
  foodDetail = new foodDetail();
  foodsD=Array();
  customer = Array();
  CusID = new CusID();
  getBid = new getBid();
  constructor()
  {
    console.log("Menu cid",this.CusID.cid);
  }
}

class detail{
  bid:        number=0;
  cid:        number=0;
  name:       string='';
  status:     string='';
  totalPrice: number=0;
  day:        string='';
}

class foodDetail{
  food:   string='';
}

class CusID{
  cid: number=0;
}
class getBid{
  bid : number=0;
}
