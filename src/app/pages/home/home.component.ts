import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../Models/Funcionario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  funcionario: Funcionario[] = []

  constructor (private funcionarioService: FuncionarioService){}
    ngOnInit(): void {
       this.funcionarioService.GetFuncionarios().subscribe(data => {
        console.log(data)
       });
    }
  }



