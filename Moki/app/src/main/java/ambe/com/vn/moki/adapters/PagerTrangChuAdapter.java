package ambe.com.vn.moki.adapters;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;
import android.widget.ArrayAdapter;

import java.util.ArrayList;

import ambe.com.vn.moki.fragments.MainFragment;

/**
 * Created by AMBE on 16/09/2017.
 */

public class PagerTrangChuAdapter extends FragmentStatePagerAdapter {
    private ArrayList<String> arrayList;

    public PagerTrangChuAdapter(FragmentManager fm, ArrayList<String> arrayList) {
        super(fm);
        this.arrayList = arrayList;
    }

    @Override
    public Fragment getItem(int position) {

        MainFragment mainFragment = new MainFragment();
        Bundle bundle = new Bundle();
        bundle.putInt("ID", position);
        mainFragment.setArguments(bundle);
        return mainFragment;

    }


    @Override
    public int getCount() {
        return arrayList.size();
    }
}

