package com.fy.Stickers_and_Links.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import com.fy.Stickers_and_Links.interfaces.LinkRepository;
import com.fy.Stickers_and_Links.models.Link;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

@Service
public class LinkService {

    private final LinkRepository linkRepository;

    @Autowired
    public LinkService(LinkRepository linkRepository){
        this.linkRepository = linkRepository;
    }

    public List<Link> getAllLinks(){
        return linkRepository.findAll();
    }

    public void addLink(Link link){
        Optional<Link> linkOptional = linkRepository.findLinkByUrl(link.getUrl());
        if(linkOptional.isPresent()){
            throw new IllegalStateException("url exists");
        }
        linkRepository.save(link);
    }

    public void deleteLink(int LinkId) {
        boolean linkExists = linkRepository.existsById(LinkId);
        if(!linkExists){
            throw new IllegalStateException("link with id" + LinkId + "does not exists");
        }
        linkRepository.deleteById(LinkId);
    }

    public void updateLink(int linkId, Link newLink){
        Link link = linkRepository.findById(linkId).orElseThrow(() -> new IllegalStateException("link with id " + linkId + " does not exists"));
        if(newLink.getTitle() != null && newLink.getTitle().length() > 0 && !Objects.equals(link.getTitle(), newLink.getTitle())){
            link.setTitle(newLink.getTitle());
        }
        if(newLink.getUrl() != null && newLink.getUrl().length() > 0 && !Objects.equals(link.getUrl(), newLink.getUrl())){
            Optional<Link> linkOptional = linkRepository.findLinkByUrl(newLink.getUrl());
            if(linkOptional.isPresent()){
                throw new IllegalStateException("url exists");
            }
            link.setUrl(newLink.getUrl());
        }
        if(!Objects.equals(link.getHide(), newLink.getHide())){
            link.setHide(newLink.getHide());
        }
        linkRepository.save(link);

    }
}
