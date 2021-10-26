package com.fy.Stickers_and_Links.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Link {
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
    private String title;
    private String url;
    private boolean hide;

    public Link(){
        
    }

    public Link(String title, String url, boolean hide){
        // this.id = id;
        this.title = title;
        this.url = url;
        this.hide = hide;
    }

    public void setId(int id){
        this.id = id;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public void setUrl(String url){
        this.url = url;
    }

    public void setHide(boolean hide){
        this.hide = hide;
    }

    public int getId(){
        return id;
    }

    public String getTitle(){
        return title;
    }

    public String getUrl(){
        return url;
    }

    public boolean getHide(){
        return hide;
    }
}
