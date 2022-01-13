package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="tb_score")
public class Score {
	//chave composta, precisa ser instanciada
	@EmbeddedId
	private ScorePK id = new ScorePK();

	private Double value;
	
	public Score() {
		
	}
	
	//adicionado para acessar o filme
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	//adicionado para acessar o usuário
	public void setUser(User user) {
		id.setUser(user);
	}
	
	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	
}
