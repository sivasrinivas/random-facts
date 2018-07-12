import {Component, OnInit} from '@angular/core';
import {Fact} from "../fact";
import {FactService} from "../fact.service";

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  facts: Fact[];

  constructor(private factService: FactService) {
  }

  ngOnInit() {
    this.getFacts();
  }

  getFacts() {
    this.factService.getFacts()
      .subscribe(facts => this.facts = facts);
  }

}
