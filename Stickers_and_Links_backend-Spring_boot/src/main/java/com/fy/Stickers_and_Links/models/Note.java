package com.fy.Stickers_and_Links.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Note {
    @Id
    @SequenceGenerator(
        name = "link_seqience",
        sequenceName = "link_seqience",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "link_seqience"
    )
    private int id;
    private String content;
    private String color;
    private boolean hide;

    public Note(){
        
    }

    public Note(String content, String color, boolean hide){
        // this.id = id;
        this.content = content;
        this.color = color;
        this.hide = hide;
    }

    public void setId(int id){
        this.id = id;
    }

    public void setContent(String content){
        this.content = content;
    }

    public void setColor(String color){
        this.color = color;
    }

    public void setHide(boolean hide){
        this.hide = hide;
    }

    public int getId(){
        return id;
    }

    public String getContent(){
        return content;
    }

    public String getColor(){
        return color;
    }

    public boolean getHide(){
        return hide;
    }
}
