package com.crick.app.CricketInformer.repositories;

import com.crick.app.CricketInformer.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRepo extends JpaRepository<Match, Integer> {
//    i want to fetch the match
//    we provide teamHeading
    Optional<Match> findByTeamHeading(String teamHeading);
}
