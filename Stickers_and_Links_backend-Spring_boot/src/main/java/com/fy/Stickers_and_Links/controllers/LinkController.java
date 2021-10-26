package com.fy.Stickers_and_Links.controllers;

import java.util.List;

import com.fy.Stickers_and_Links.models.Link;
import com.fy.Stickers_and_Links.service.LinkService;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping(path = "/links")
public class LinkController {

    private final LinkService linkService;

    @Autowired
    public LinkController(LinkService linkService){
        this.linkService = linkService;
    }

    @GetMapping()
    public List<Link> getLinks(){
        return linkService.getAllLinks();
    }

    @PostMapping()
    public Link addLink(@RequestBody Link link){
        linkService.addLink(link);
        return link;
    }

    @PutMapping(path = "/{linkId}")
    public Link updateLink(@PathVariable("linkId") int linkId, @RequestBody Link link){
        linkService.updateLink(linkId, link);
        return link;
    }

    @DeleteMapping(path = "/{linkId}")
    public void deleteLink(@PathVariable("linkId") int LinkId){
        linkService.deleteLink(LinkId);
    }
}

