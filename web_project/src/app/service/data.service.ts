export class DataService{
  apiEndpoint = 'http://localhost/WebApiGit';
  detail = new detail();
  foodDetail = new foodDetail();
  foodsD=Array();
  cusDataLogin = Array<dataCusLogin>();
  constructor()
  {}
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

//   cid:     number;
//   name:    string;
//   money:   number;
//   address: string;
//   phone:   number;
