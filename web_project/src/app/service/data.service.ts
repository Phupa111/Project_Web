export class DataService{
  apiEndpoint = 'http://localhost/WebApiGit';
  detail = new detail();
<<<<<<< Updated upstream
=======
  foodDetail = new foodDetail();
  cusId = new cusId();
  foodsD=Array();
  c = Array();

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

class foodDetail{
  food:   string='';
}

class cusId{
  cusid : number = 0;
}

>>>>>>> Stashed changes
