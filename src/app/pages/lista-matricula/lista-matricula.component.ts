import { Component, OnInit } from '@angular/core';
import { ListaMatriculas } from '../lista-matriculas';
import { MatriculaService } from 'src/app/service/matricula.service';

@Component({
  selector: 'app-lista-matricula',
  templateUrl: './lista-matricula.component.html',
  styleUrls: ['./lista-matricula.component.css']
})
export class ListaMatriculaComponent implements OnInit {
  matriculas: ListaMatriculas[];
  constructor(private matriculaService:MatriculaService) { }

  ngOnInit(): void {
    this.matriculaService.getAll().subscribe(
      e =>this.matriculas=e
    );
  }
}

