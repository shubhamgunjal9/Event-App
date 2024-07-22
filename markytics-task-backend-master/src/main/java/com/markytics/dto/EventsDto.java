package com.markytics.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class EventsDto {

    private Integer eventId;

    @NotNull
    private String eventsTitle;
    private String eventsDescription;
    @NotNull
    private String eventsDate;
    @NotNull
    private String eventsStartTime;

    @NotNull
    private String eventsEndTime;
    private String eventsLocation;
    @NotNull
    private String eventsVenue;
    private String eventsStatus;

    private Integer userId;
}
