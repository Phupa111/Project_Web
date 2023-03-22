export class DataService{
  apiEndpoint = 'http://localhost/WebApiGit';
  detail = new detail();
  foodDetail = new foodDetail();
  foodsD=Array();
  c = Array();

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
