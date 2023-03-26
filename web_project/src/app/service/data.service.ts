export class DataService{
  apiEndpoint = 'http://localhost/WebApiGit';
  detail = new detail();
  foodDetail = new foodDetail();
  foodsD=Array();
  customer = Array();
  CusID = new CusID();
  getBid = new getBid();
  cusDataLogin = new dataCusLogin();

  constructor()
  {

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
class dataCusLogin{
  cid:     number=0;
  name:    string='';
  money:   number=0;
  address: string='';
  phone:   number=0;

}
class CusID{
  cid: number=0;
}
class getBid{
  bid:        number=0;
  cid:        number=0;
  dateDay:    string='';
  status:     string='';
  totalPrice: number=0;
}

