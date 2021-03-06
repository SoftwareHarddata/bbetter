package com.softwareharddata.bbetter.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
//@Document(collection = "user")
@Entity
@Table(name="user_details")
public class UserDetails implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id_user")
    private String idUser;
    @Column(name="id_user_singup")
    private String idUserSingUp;

    @Column(name="is_premium")
    private boolean isPremium;
    private String age;
    private String sector;
    private String department;
    private String occupation;
    private String company_size;
    private int plz;
    // private ArrayList<String> interests;
    // private ArrayList<String> extraInfos;

    //private ArrayList<String> favoriteList;
    //private ArrayList<String> clickedLike;
    //private ArrayList<String> clickedMoreInfos;
    //private ArrayList<String> clickedContact;
    //private ArrayList<String> clicked; // tel, e-mail, video, office
    //private boolean hasStress;

}
