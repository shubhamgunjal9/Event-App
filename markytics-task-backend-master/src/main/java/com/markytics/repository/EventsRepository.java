package com.markytics.repository;

import com.markytics.entity.Events;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventsRepository extends JpaRepository<Events,Integer> {
}
