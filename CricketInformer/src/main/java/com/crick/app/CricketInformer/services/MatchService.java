package com.crick.app.CricketInformer.services;

import com.crick.app.CricketInformer.entities.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {
//    Get all Matches
    List<Match> getAllMatches();

//    get live Matches
    List<Match> getLiveMatches();

//    get cwc2023 point table
    List<List<String>> getPointTable();
}
