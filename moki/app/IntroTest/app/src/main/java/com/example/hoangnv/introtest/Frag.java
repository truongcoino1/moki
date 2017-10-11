package com.example.hoangnv.introtest;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import android.view.animation.AnimationSet;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;

/**
 * Created by HoangNV on 10/10/2017.
 */

public class Frag extends Fragment{
    ImageView img;
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v=inflater.inflate(R.layout.fragment,container,false);
        img=(ImageView)v.findViewById(R.id.img);
        Animation animation= AnimationUtils.loadAnimation(getActivity(),R.anim.abc_slide_out_top);
        img.setAnimation(animation);

        return v;
    }
}
